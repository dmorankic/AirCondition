import { Component } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

   fanSpeed = 0;
   statuss = "off";
   angle = 0;

   turnOnAC() {
    fetch(
      "https://iot-ab937-default-rtdb.europe-west1.firebasedatabase.app/AC-ON.json",
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "on", fanSpeed: 1, angle: 1 }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        this.fanSpeed = response.fanSpeed;
        this.statuss = response.status;
        this.angle = response.angle;
      });
  }

   turnOffAC() {
    fetch(
      "https://iot-ab937-default-rtdb.europe-west1.firebasedatabase.app/AC-ON.json",
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "off", fanSpeed: 0, angle: 0 }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        this.fanSpeed = response.fanSpeed;
        this.statuss = response.status;
        this.angle=response.angle
      });
  }

   incFanSpeed() {
    if (this.statuss == "off") {
      return;
    } else if (this.fanSpeed > 2) {
      return;
    }

    fetch(
      "https://iot-ab937-default-rtdb.europe-west1.firebasedatabase.app/AC-ON.json",
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fanSpeed: this.fanSpeed + 1 }),
      }
    )
      .then((response) => response.json())
      .then((response) => (this.fanSpeed = response.fanSpeed));
  }

   decFanSpeed() {
    if (this.statuss == "off") {
      return;
    } else if (this.fanSpeed < 2) {
      return;
    }

    fetch(
      "https://iot-ab937-default-rtdb.europe-west1.firebasedatabase.app/AC-ON.json",
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fanSpeed: this.fanSpeed - 1 }),
      }
    )
      .then((response) => response.json())
      .then((response) => (this.fanSpeed = response.fanSpeed));
  }

   incFanAngle() {
    if (this.statuss == "off") {
      return;
    } else if (this.angle > 2) {
      return;
    }

    fetch(
      "https://iot-ab937-default-rtdb.europe-west1.firebasedatabase.app/AC-ON.json",
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ angle: this.angle + 1 }),
      }
    )
      .then((response) => response.json())
      .then((response) => (this.angle = response.angle));
  }

   decFanAngle() {
    if (this.statuss == "off") {
      return;
    } else if (this.angle < 2) {
      return;
    }

    fetch(
      "https://iot-ab937-default-rtdb.europe-west1.firebasedatabase.app/AC-ON.json",
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ angle: this.angle - 1 }),
      }
    )
      .then((response) => response.json())
      .then((response) => (this.angle = response.angle));
  }


}
