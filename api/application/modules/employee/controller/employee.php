<?php
class Employee extends CI_Controller
{

  public function Index()
  {
    $this->load->model('employeemodel');
    $data['fetch_data'] = $this->employeemodel->fetch();
    $this->load->view('employee_list', $data);
  }

  public function insert_data()
  {
    $this->load->model('employeemodel');

    if ($this->input->post()) {
      $postemp = $this->input->post();

      $this->form_validation->set_rules('EmployeeName', ' EmployeeName', 'required');
      $this->form_validation->set_rules('JoiningDate', 'JoiningDate', 'required');
      $this->form_validation->set_rules('BirthDate', 'BirthDate', 'required');
      $this->form_validation->set_rules('Address', ' Address', 'required');
      $this->form_validation->set_rules('PhoneNo', 'PhoneNo', 'required|regex_match[/^[0-9]{10}$/]');
      $this->form_validation->set_rules('Designation', 'Designation', 'required');
    $this->form_validation->set_rules('EmailId', 'EmailId', 'required|valid_emails');
      $this->form_validation->set_rules('IsActive', 'IsActive', 'required');

      if ($this->form_validation->run() == false) {
        $this->session->set_flashdata('error', validation_errors());
        redirect('employee');
      } else {
        $data = array(
          'EmployeeName'     => $postemp['EmployeeName'],
          'JoiningDate'  =>  $postemp['JoiningDate'],
          'BirthDate'   => $postemp['BirthDate'],
          'Address' => $postemp['Address'],
          'PhoneNo'  => $postemp['PhoneNo'],
          'Designation'   => $postemp['Designation'],
          'EmailId' => $postemp['EmailId'],
          'IsActive'   => $postemp['IsActive'],
        );
        $result = $this->employeemodel->insert($data);
        if ($result) {
          $this->session->set_flashdata('success', 'Successfully Inserted');
          redirect('employee');
        }
      }
    } else {
      return false;
    }
  }

  public function update()
  {
    $EmployeeId = $this->input->get('id');
    $this->load->model("employeemodel");
    $data['employee_data'] = $this->employeemodel->fetch_data($EmployeeId);
    $data['fetch_data'] = $this->employeemodel->fetch();
    $this->load->view("employee_list", $data);
  }

  public function update_data()
  {
    $this->load->model("employeemodel");
    if ($this->input->post()) {
      $postemp = $this->input->post();
     
      $this->form_validation->set_rules('EmployeeName', ' EmployeeName', 'required');
      $this->form_validation->set_rules('JoiningDate', 'JoiningDate', 'required');
      $this->form_validation->set_rules('BirthDate', 'BirthDate', 'required');
      $this->form_validation->set_rules('Address', ' Address', 'required');
      $this->form_validation->set_rules('PhoneNo', 'PhoneNo', 'required|regex_match[/^[0-9]{10}$/]');
      $this->form_validation->set_rules('Designation', 'Designation', 'required');
      $this->form_validation->set_rules('EmailId', 'EmailId', 'required|valid_emails');
      $this->form_validation->set_rules('IsActive', 'IsActive', 'required');

      if ($this->form_validation->run() == false) {
        $this->session->set_flashdata('error', validation_errors());
        redirect('employee');
      } else {
        $data = array(
          'EmployeeId'     => $postemp['EmployeeId'],
          'EmployeeName'     => $postemp['EmployeeName'],
          'JoiningDate'  =>  $postemp['JoiningDate'],
          'BirthDate'   => $postemp['BirthDate'],
          'Address' => $postemp['Address'],
          'PhoneNo'  => $postemp['PhoneNo'],
          'Designation'   => $postemp['Designation'],
          'EmailId' => $postemp['EmailId'],
          'IsActive'   => $postemp['IsActive'],
        );
        $result = $this->employeemodel->update($data);
        if ($result) {
          $this->session->set_flashdata('success', 'Successfully Updated');
          redirect('employee');
        }
      }
    } else {
      return false;
    }
  }

  public function delete($id = NULL)
  {
    $this->load->model('employeemodel');
    $id = $this->input->get('id');
    $result = $this->employeemodel->delete($id);
    if ($result) {
      redirect("employee");
    }
  }
}