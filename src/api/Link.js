import axios from "axios";
import { Base_URL } from "../constants/Constants";

const instance = axios.create({
    baseURL: Base_URL,
});

export default instance;