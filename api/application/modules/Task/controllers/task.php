<?php
defined('BASEPATH') or exit('No direct script access allowed');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');

class Task extends CI_Controller
{
	public function list()
	{
		$this->load->model('taskmodel');
		$data = $this->taskmodel->fetch();
		$res = $data->result();
		echo json_encode($res);
	}

	public function insert_data()
	{
		$this->load->model('taskmodel');
		$data = json_decode(trim(file_get_contents('php://input')), true);
		if (!empty($data['DailyTaskId'])) {
			$result = $this->taskmodel->update($data);
		} else {
			$result = $this->taskmodel->insert($data);
		}
		if ($result) {
			echo json_encode($result);
		}
	}

	public function update()
	{
		$DailyTaskId = $this->input->get('id');
		$this->load->model("taskmodel");
		$data = $this->taskmodel->fetch_data($DailyTaskId);
		echo json_encode($data);
	}

	public function update_data()
	{
		$this->load->model('taskmodel');
		$data = json_decode(trim(file_get_contents('php://input')), true);
		// $data =$this->input->post();
		// $data['id'] = $this->input->get('id');
		$result = $this->taskmodel->update($data);
		if ($result) {
			echo json_encode($data);
		}
	}

	public function delete($id = NULL)
	{
		$this->load->model('taskmodel');
		$id = $this->input->get('id');
		$result = $this->taskmodel->delete($id);
		if ($result) {
				redirect("http://localhost:4200/task/list");
		}
	}
}
