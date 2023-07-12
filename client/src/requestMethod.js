import axios from "axios";

const BASE_URL = "https://ecommerce-api-production-74f2.up.railway.app/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmI3NTdjNmY1NzBlMGFhZWNkNWE0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDQyMjc0OSwiZXhwIjoxNjg0NjgxOTQ5fQ.MHrL_n2vgjmoss42HpBH2fKa-VVoIMAyH55OTMMBuYIeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmI3NTdjNmY1NzBlMGFhZWNkNWE0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTQwMTIzOSwiZXhwIjoxNjgxNjYwNDM5fQ.143NX42W0G7jMKV9yBb4vwyCVPeu0EkYoy6eIo9GaYQ";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
