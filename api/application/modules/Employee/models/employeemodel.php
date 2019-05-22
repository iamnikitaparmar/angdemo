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
	//IsActive
	public function isActiveChange($post_data)
	{
		try {
			if ($post_data) {
				if (trim($post_data['IsActive']) == 1) {
					$IsActive = true;
				} else {
					$IsActive = false;
				}
				$data = array(
					'IsActive' => $IsActive,
					'UpdatedBy' =>1,
					'UpdatedOn' => date('y-m-d H:i:s'),
				);
				$this->db->where('EmployeeId', trim($post_data['EmployeeId']));
				$res = $this->db->update('tblemployees', $data);
				$db_error = $this->db->error();
				if (!empty($db_error) && !empty($db_error['code'])) {
					throw new Exception('Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message']);
					return false; // unreachable return statement !!!
				}else{
					return true;
				}
			} else {
				return false;
			}
		} catch (Exception $e) {
			trigger_error($e->getMessage(), E_USER_ERROR);
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
