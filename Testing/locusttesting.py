from locust import HttpUser, TaskSet, task
import json

class BackendTasks(TaskSet):
    @task
    def index(self):
        self.client.post(
            "/api/user/login",
            data=json.dumps({"email": "teundeclercq2@gmail.com", "password": "Test!234"}),
            headers={'content-type': 'application/json'}
        )

class WebsiteUser(HttpUser):
    tasks = [BackendTasks]
    min_wait = 5000
    max_wait = 15000