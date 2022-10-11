import { api } from "../../config/axios";

const postResponsible = async (
  name,
  rg,
  fileRgbase64,
  contentType,
  cell_phone,
  email,
  is_responsible_for_transport,
  id_student
) => {
  const body = {
    name,
    rg,
    fileRgbase64,
    contentType,
    cell_phone,
    email,
    is_responsible_for_transport,
    id_student,
  };
  const { data, status } = await api.post("responsible", body);
  console.log(data)
  return { data, status };
};
const postStudent = async (
    name,
    birth,
    has_special_needs,
    what_deficiency,
    cellphone,
    email,
    address,
    address_number,
    zipcode,
    complement,
    district,
    city,
    school,
    year_shool,
    origin,
    has_online_disponibility,
    has_time_disponibility,) => {
  const body = {
    name,
    birth,
    has_special_needs,
    what_deficiency,
    cellphone,
    email,
    address,
    address_number,
    zipcode,
    complement,
    district,
    city,
    school,
    year_shool,
    origin,
    has_online_disponibility,
    has_time_disponibility,
  };
  const {data, status} = await api.post('/student', body);
  console.log(data)
  return { data, status}
};
export const FormEnrollmentService = {
  postResponsible,
  postStudent,
};
