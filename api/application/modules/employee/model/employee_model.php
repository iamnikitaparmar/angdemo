<?php

class Employeemodel extends CI_Model
{
  public function insert($data)
  {
    if ($data) {

      $res = $this->db->insert('tblemployees', $data);
      if ($res) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  public function fetch()
  {
    $this->db->select('*');
    $query = $this->db->get('tblemployees');
    if ($query) {
      return $query;
    }
    return $query;
  }

  public function fetch_data($id = NULL)
  {

    if ($id) {
      $this->db->select('*');
      $this->db->where('EmployeeId', $id);

      $result = $this->db->get('tblemployees');
      $employee = array();
      if ($result->result()) {
        foreach ($result->result() as $row) {
          $employee = $row;
        }
      }
      return $employee;
    } else {
      return false;
    }
  }

  public function update($data)
  {

    if ($data) {

      $this->db->where('EmployeeId', $data['EmployeeId']);
      $res = $this->db->update('tblemployees', $data);
      if ($res) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  public function delete($id)
  {

    if ($id) {
      $this->db->where('EmployeeId', $id);
      $res = $this->db->delete('tblemployees');
      if ($res) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
