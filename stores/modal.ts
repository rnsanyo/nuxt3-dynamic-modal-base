import { defineStore } from "pinia";

export type Modal = {
  isOpen: boolean,
  view: object,
  actions?: ModalAction[],
};

export type ModalAction = {
  label: string,
  buttonClass?: string,
  callback: (props?: any) => void,
};

export const useModal = defineStore("modal", {
  state: (): Modal => ({
    isOpen: false,
    view: {},
    actions: [],
  }),

  actions: {
    open(view: object, actions?: ModalAction[]) {
      this.isOpen = true;
      this.actions = actions;
      // using markRaw to avoid over performance as reactive is not required
      this.view = markRaw(view);
    },

    close() { // Defining setTimeout to give space for the closing transition.
      setTimeout(() => {
        this.isOpen = false;
        this.view = {};
        this.actions = [];
      }, 250);
    },
  },
});