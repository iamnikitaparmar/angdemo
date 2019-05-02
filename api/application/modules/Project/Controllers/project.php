<?php
defined('BASEPATH') or exit('No direct script access allowed');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');

class Project extends CI_Controller
{

	public function list()
	{
		$this->load->model('projectmodel');
		$data = $this->projectmodel->fetch();
		$res = $data->result();
		echo json_encode($res);
	}

	public function insert_data()
	{
		$this->load->model('projectmodel');
		$data = json_decode(trim(file_get_contents('php://input')), true);
		if (!empty($data['ProjectId'])) {
			$result = $this->projectmodel->update($data);
		} else {
			$result = $this->projectmodel->insert($data);
		}
		if ($result) {
			echo json_encode($result);
		}
	}

	public function update()
	{
		$ProjectId = $this->input->get('id');
		$this->load->model("projectmodel");
		$data = $this->projectmodel->fetch_data($ProjectId);
		echo json_encode($data);
	}

	public function update_data()
	{
		$this->load->model('projectmodel');
		$data = json_decode(trim(file_get_contents('php://input')), true);
		// $data =$this->input->post();
		// $data['id'] = $this->input->get('id');
		$result = $this->projectmodel->update($data);
		if ($result) {
			echo json_encode($data);
		}
	}

	public function delete($id = NULL)
	{
		$this->load->model('projectmodel');
		$id = $this->input->get('id');
		$result = $this->projectmodel->delete($id);
		if ($result) {
				redirect("http://localhost:4200/project/list");
		}
	}
}