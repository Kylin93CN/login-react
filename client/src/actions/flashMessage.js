import { ADD_FLASH_MESSAGE } from '../const';

export const addFlashMessage = (message) => {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}