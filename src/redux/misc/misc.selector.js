import { getValue } from "../../library";
import { store } from '../../redux/store';

export const getLoaderStatus = () => getValue(store.getState(), "Misc.loader.status", false);

export const getErrorMessages = () => getValue(store.getState(), "Misc.error.message", []);

export const getSuccessMessages = () => getValue(store.getState(), "Misc.success.message", []);