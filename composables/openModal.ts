import { useModal, Modal, ModalAction } from "../stores/modal";
import Counter from "../components/Modal/Counter.vue";
import Signup from "../components/Modal/Signup.vue";
import Login from "../components/Modal/Login.vue";

export enum Components {
  Counter = 'Counter',
  Signup = 'Signup',
  Login = 'Login'
}

function getComponentData(component: Components): any  {
  switch (component) {
    case Components.Counter:
      return Counter;
    case Components.Signup:
      return Signup;
    case Components.Login:
      return Login;
  }
}

export default function openModal(passingComponent: Components): void {
  const modal = useModal();

  const modalActions: Record<Components, ModalAction[]> = {
    'Counter': [
      {
        label: "Log the count!",
        buttonClass: "btn-primary",
        callback: (dataFromView: Modal["view"]) => {
          console.log(dataFromView);
          modal.close(); // This store function only resets the modal store properties.
        },
      },
      {
        label: "Close",
        buttonClass: "btn-neutral",
        callback: () => {
          modal.close();
        },
      },
    ],
    'Signup': [
      {
        label: "Sign me up!",
        buttonClass: "btn-primary",
        callback: (dataFromView: Modal["view"]) => {
          console.log(dataFromView);
          modal.close();
        },
      },
      {
        label: "Close",
        buttonClass: "btn-neutral",
        callback: () => {
          modal.close();
        },
      },
    ],
    'Login': [
      {
        label: "Log me in",
        buttonClass: "btn-primary",
        callback: (dataFromView: Modal["view"]) => {
          console.log(dataFromView);
          modal.close(); // This store function only resets the modal store properties.
        },
      },
      {
        label: "Close",
        buttonClass: "btn-neutral",
        callback: () => {
          modal.close(); // This store function only resets the modal store properties.
        },
      },
    ]
  }
  
  modal.open(getComponentData(passingComponent), modalActions[passingComponent]);
}