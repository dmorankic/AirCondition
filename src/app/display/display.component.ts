import { Component, HostListener, Input, OnInit } from '@angular/core';
import { getDatabase, ref, onValue } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDnRYbbob_SVsjxGJUT6iByuY_EAHfb3-U',
  authDomain: 'iot-ab937.firebaseapp.com',
  databaseURL:
    'https://iot-ab937-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'iot-ab937',
  storageBucket: 'iot-ab937.appspot.com',
  messagingSenderId: '433896793106',
  appId: '1:433896793106:web:fc18f8adc89e1bb64564cb',
  measurementId: 'G-TGW3NX77PB',
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const starCountRef = ref(db, 'AC-ON');

onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  window.dispatchEvent(new CustomEvent('test', { detail: data.status }));
  window.dispatchEvent(new CustomEvent('test1', { detail: data.angle }));
  window.dispatchEvent(new CustomEvent('test2', { detail: data.fanSpeed }));

  console.log(DisplayComponent.prototype.compStatus);
});

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  imgPath = '../images/ac-off.jpg';
  compStatus = 'off';
  angle = 0;
  speed = 0;

  @HostListener('window:test', ['$event'])
  testListener(event: any) {
    this.compStatus = event.detail;
  }

  @HostListener('window:test1', ['$event'])
  testListener1(event: any) {
    this.angle = event.detail;
  }

  @HostListener('window:test2', ['$event'])
  testListener2(event: any) {
    this.speed = event.detail;
  }
}
