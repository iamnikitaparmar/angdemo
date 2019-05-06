<?php

class Employeemodel extends CI_Model
{
	public function insert($data)
	{
		if ($data) {
			$post_data = $data;

			$insertdata = array(
				"EmployeeName" => trim($post_data['EmployeeName']),
				"JoiningDate" => trim($post_data['JoiningDate']),
				"BirthDate" => trim($post_data['BirthDate']),
				"Address" => trim($post_data['Address']),
				"PhoneNo" => trim($post_data['PhoneNo']),
				"Designation" => trim($post_data['Designation']),
				"EmailId" => trim($post_data['EmailId']),
				"IsActive" => trim($post_data['IsActive'])
			);


			$res = $this->db->insert('tblemployees', $insertdata);
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
		$this->db->select('EmployeeId,EmployeeName,JoiningDate,	BirthDate,Address,PhoneNo,Designation,EmailId,IsActive');
		$query = $this->db->get('tblemployees');
		if ($query) {
			return $query;
		}
		return $query;
	}

	public function fetch_data($id = NULL)
	{

		if ($id) {
			$this->db->select('EmployeeId,EmployeeName,JoiningDate,	BirthDate,Address,PhoneNo,Designation,EmailId,IsActive');
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
			$post_data = $data;

			$updatetdata = array(

				"EmployeeName" => trim($post_data['EmployeeName']),
				"JoiningDate" => trim($post_data['JoiningDate']),
				"BirthDate" => trim($post_data['BirthDate']),
				"Address" => trim($post_data['Address']),
				"PhoneNo" => trim($post_data['PhoneNo']),
				"Designation" => trim($post_data['Designation']),
				"EmailId" => trim($post_data['EmailId']),
				"IsActive" => trim($post_data['IsActive'])
			);


			$this->db->where('EmployeeId', $post_data['EmployeeId']);
			$res = $this->db->update('tblemployees', $updatetdata);
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
