import { Component } from '@angular/core';
import { faPowerOff,faFan,faAnglesUp,faAnglesDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
})
export class ControllerComponent {
  faOff = faPowerOff;
  faFan=faFan;
  faUp=faAnglesUp;
  faDown=faAnglesDown;
  fanSpeed = 0;
  statuss = 'off';
  angle = 0;



  switchACState() {
    let state = {
      staatus: 'off',
      angle: 0,
      speed: 0,
    };
    if (this.statuss == 'off') {
      state.angle = 1;
      state.speed = 1;
      state.staatus = 'on';
    }
    fetch(
      'https://iot-ab937-default-rtdb.europe-west1.firebasedatabase.app/AC-ON.json',
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: state.staatus, fanSpeed: state.speed, angle: state.angle }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        this.fanSpeed = response.fanSpeed;
        this.statuss = response.status;
        this.angle = response.angle;
      });
  }

  incFanSpeed() {
    if (this.statuss == 'off') {
      return;
    } else if (this.fanSpeed > 2) {
      return;
    }

    fetch(
      'https://iot-ab937-default-rtdb.europe-west1.firebasedatabase.app/AC-ON.json',
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fanSpeed: this.fanSpeed + 1 }),
      }
    )
      .then((response) => response.json())
      .then((response) => (this.fanSpeed = response.fanSpeed));
  }

  decFanSpeed() {
    if (this.statuss == 'off') {
      return;
    } else if (this.fanSpeed < 2) {
      return;
    }

    fetch(
      'https://iot-ab937-default-rtdb.europe-west1.firebasedatabase.app/AC-ON.json',
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fanSpeed: this.fanSpeed - 1 }),
      }
    )
      .then((response) => response.json())
      .then((response) => (this.fanSpeed = response.fanSpeed));
  }

  incFanAngle() {
    if (this.statuss == 'off') {
      return;
    } else if (this.angle > 2) {
      return;
    }

    fetch(
      'https://iot-ab937-default-rtdb.europe-west1.firebasedatabase.app/AC-ON.json',
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ angle: this.angle + 1 }),
      }
    )
      .then((response) => response.json())
      .then((response) => (this.angle = response.angle));
  }

  decFanAngle() {
    if (this.statuss == 'off') {
      return;
    } else if (this.angle < 2) {
      return;
    }

    fetch(
      'https://iot-ab937-default-rtdb.europe-west1.firebasedatabase.app/AC-ON.json',
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ angle: this.angle - 1 }),
      }
    )
      .then((response) => response.json())
      .then((response) => (this.angle = response.angle));
  }
}
