<?php

class Taskmodel extends CI_Model
{
    public function insert($data)
	{
		if ($data) {
			$post_data = $data;

			$insertdata = array(
				"EmployeeId" => trim($post_data['EmployeeId']),
				"ProjectId" => trim($post_data['ProjectId']),
                "TaskDate" => trim($post_data['TaskDate']),
                "TaskDescription" => trim($post_data['TaskDescription']),
                "IsActive"  => trim($post_data['IsActive']),
			);

			$res = $this->db->insert('tbldailytask', $insertdata);
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
		$query = $this->db->get('tbldailytask');
		if ($query) {
			return $query;
		}
		return $query;
    }
    
    public function fetch_data($id = NULL)
	{

		if ($id) {
			$this->db->select('*');
			$this->db->where('DailyTaskId', $id);

			$result = $this->db->get('tbldailytask');
			$task = array();
			if ($result->result()) {
				foreach ($result->result() as $row) {
					$task = $row;
				}
			}
			return $task;
		} else {
			return false;
		}
    }
    
    public function update($data)
	{
		if ($data) {
			$post_data = $data;

			$updatetdata = array(

				"EmployeeId" => trim($post_data['EmployeeId']),
				"ProjectId" => trim($post_data['ProjectId']),
                "TaskDate" => trim($post_data['TaskDate']),
                "TaskDescription" => trim($post_data['TaskDescription']),
                "IsActive"  => trim($post_data['IsActive']),
			);


			$this->db->where('DailyTaskId', $post_data['DailyTaskId']);
			$res = $this->db->update('tbldailytask', $updatetdata);
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
			$this->db->where('DailyTaskId', $id);
			$res = $this->db->delete('tbldailytask');
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