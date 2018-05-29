export class User {
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  phone: string;
  password: string;
  corporate_id: number;
}

export class CommonResponse {
  status: number;
  message: string;
}

export class ObjResponse {
  obj_response: CommonResponse;
}

export class AuthorizeResposne {
  token: string;
  id: number;
  status: number;
  message: string;
}
