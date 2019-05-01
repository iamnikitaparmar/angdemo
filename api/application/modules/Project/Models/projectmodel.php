<?php

class Projectmodel extends CI_Controller
{
    public function insert($data)
	{
		if ($data) {
			$post_data = $data;

			$insertdata = array(
				"ProjectName" => trim($post_data['ProjectName']),
				"Description" => trim($post_data['Description']),
				"IsActive" => trim($post_data['IsActive'])
			);

			$res = $this->db->insert('tblprojects', $insertdata);
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
		$query = $this->db->get('tblprojects');
		if ($query) {
			return $query;
		}
		return $query;
    }
    
    public function fetch_data($id = NULL)
	{

		if ($id) {
			$this->db->select('*');
			$this->db->where('ProjectId', $id);

			$result = $this->db->get('tblprojects');
			$project = array();
			if ($result->result()) {
				foreach ($result->result() as $row) {
					$project = $row;
				}
			}
			return $project;
		} else {
			return false;
		}
    }
    

    public function update($data)
	{
		if ($data) {
			$post_data = $data;

			$updatetdata = array(

                "ProjectName" => trim($post_data['ProjectName']),
				"Description" => trim($post_data['Description']),
				"IsActive" => trim($post_data['IsActive'])
			);


			$this->db->where('ProjectId', $post_data['ProjectId']);
			$res = $this->db->update('tblprojects', $updatetdata);
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
			$this->db->where('ProjectId', $id);
			$res = $this->db->delete('tblprojects');
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