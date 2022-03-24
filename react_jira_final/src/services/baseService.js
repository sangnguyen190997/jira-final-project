import Axios from "axios";
import {
  DOMAIN_CYBERBUG,
  KEY_TOKEN_CYBERSOFT,
  TOKEN,
  TOKEN_CYBERSOFT,
} from "../util/constants/settingSystem";

export class baseService {
  //put json về phía backend
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN_CYBERBUG}/${url}`,
      method: "PUT",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
      [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT, //JWT
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN_CYBERBUG}/${url}`,
      method: "POST",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
      [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT, //JWT
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN_CYBERBUG}/${url}`,
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
      [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN_CYBERBUG}/${url}`,
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
      [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}
