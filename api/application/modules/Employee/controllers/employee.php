<?php

defined('BASEPATH') or exit('No direct script access allowed');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');

class Employee extends CI_Controller
{

	public function Index()
	{
		$this->load->model('employeemodel');
		$data = $this->employeemodel->fetch();
		$res = $data->result();
		echo json_encode($res);
		
	}

	public function insert_data()
	{
		$this->load->model('employeemodel');
		$data = json_decode(trim(file_get_contents('php://input')), true);
		if(!empty($data['EmployeeId'])){
			$result = $this->employeemodel->update($data);
		}else{
			$result = $this->employeemodel->insert($data);
		}		
		if ($result) {
			echo json_encode($data);
		}
	}


	public function update()
	{
		$EmployeeId = $this->input->get('id');
		$this->load->model("employeemodel");
		$data= $this->employeemodel->fetch_data($EmployeeId);
		echo json_encode($data);
		
	}

	public function update_data()
	{
		$this->load->model('employeemodel');
		$data = json_decode(trim(file_get_contents('php://input')), true);
		// $data =$this->input->post();
		// $data['id'] = $this->input->get('id');
		$result = $this->employeemodel->update($data);
		if ($result) {
			echo json_encode($data);
		}
			
		
	}

	public function delete($id = NULL)
	{
		$this->load->model('employeemodel');
		$id = $this->input->get('id');
		$result = $this->employeemodel->delete($id);
		if ($result) {
			redirect("http://localhost:4200/employee/list");
		}
	}
}
