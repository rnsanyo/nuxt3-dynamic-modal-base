import { useModal, Modal, ModalAction } from "../stores/modal";
import CounterModal from "../components/CounterModal.vue";
import SignupModal from "../components/SignupModal.vue"
import LoginModal from "../components/LoginModal.vue"

export enum Components {
  CounterModal = 'CounterModal',
  SignupModal = 'SignupModal',
  LoginModal = 'LoginModal'
}

function getComponentData(component: Components): any  {
  switch (component) {
    case Components.CounterModal:
      return CounterModal;
    case Components.SignupModal:
      return SignupModal;
    case Components.LoginModal:
      return LoginModal;
  }
}

export default function openModal(passingComponent: Components): void {
  const modal = useModal();

  const modalActions: Record<Components, ModalAction[]> = {
    'CounterModal': [
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
    'SignupModal': [
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
    'LoginModal': [
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
  console.log(passingComponent);
  modal.open(getComponentData(passingComponent), modalActions[passingComponent]);
}