table main_settings {
  id uuid pk
  logo varchar
  favicon varchar
  background varchar
  color varchar
  created_at timestamp
  created_by varchar
  update_at timestamp
  updated_by varchar
}

table company {
  id uuid pk
  logo varchar
  name varchar
  email varchar
  cnpj varchar
  cep varchar
  street varchar
  number varchar
  complement varchar
  district varchar
  city varchar
  state varchar
  country varchar
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table church {
  id uuid pk
  company_id uuid
  logo varchar
  name varchar
  email varchar
  cnpj varchar
  cep varchar
  street varchar
  number varchar
  complement varchar
  district varchar
  city varchar
  state varchar
  country varchar
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table user {
  id uuid pk
  login varchar
  password varchar
  change_password boolean
  status boolean
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table profile {
  id uuid pk
  user_id uuid
  name varchar
  description text
  status boolean
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table permission {
  id uuid pk
  profile_id uuid
  name varchar
  type enum // 'CREATE', 'READ', 'UPDATE', 'DELETE'
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table profile_permissions {
  id uuid pk
  profile_id uuid
  permission_id uuid
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table member_origin {
  id uuid pk
  name varchar
  description text
  status boolean
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table ordination_church {
  id uuid pk
  name varchar
  status boolean
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table nationality {
  id uuid pk
  name varchar
  status boolean
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table member {
  id uuid pk
  user_id uuid
  church_id uuid
  image varchar
  name varchar // Obrigatório
  cpf varchar // Obrigatório
  birth_date timestamp // Obrigatório
  email varchar
  phone_one varchar // Obrigatório
  phone_two varchar
  sex varchar // Obrigatório
  rg varchar
  issuing_body varchar // ORGAO EMISSOR
  civil_status enum // Obrigatório
  formation enum
  formation_course varchar
  profission varchar
  def_physics boolean
  def_visual  boolean
  def_hearing  boolean
  def_intellectual boolean
  def_mental  boolean
  def_multiple boolean
  def_other boolean
  def_other_description text
  color_race enum
  father_name varchar
  mother_name varchar
  wedding_date timestamp
  spouse_name varchar
  spouse_is_member boolean
  number_children int
  cep varchar // Obrigatório
  street varchar // Obrigatório
  number varchar // Obrigatório
  district varchar // Obrigatório
  complement varchar // Obrigatório
  city varchar // Obrigatório
  state varchar // Obrigatório
  country varchar // Obrigatório
  nationality_id uuid // Obrigatório /*CAMPO SELECT*/
  naturalness varchar // Obrigatório
  baptism_date timestamp
  baptism_local varchar
  baptism_person_performed varchar
  baptism_holy_spirit boolean
  baptism_holy_spirit_date timestamp
  member_origin_id uuid
  receipt_date timestamp
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table ordination_members_period {
  id uuid pk
  member_id uuid
  ordination_church_id uuid
  initial_period timestamp
  final_period timestamp
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table status_member {
  id uuid pk
  member_id uuid
  situation enum //'Membro ativo', 'Frequentador', 'Membro em disciplina', 'Inativo', 'Falecido'*/
  initial_period timestamp
  final_period timestamp
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table guest {
  id uuid pk
  member_id uuid
  church_id uuid
  name varchar
  phone varchar
  cep varchar
  street varchar
  number varchar
  complement varchar
  district varchar
  city varchar
  state varchar
  country varchar
  created_at timestamp
  update_at timestamp
  deleted_at timestamp

}

table event_type {
  id uuid pk
  church_id uuid
  name varchar
  description text
  status bool
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table event {
  id uuid pk
  church_id uuid
  event_type_id uuid
  name varchar
  obs text
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table event_leader {
  id uuid pk
  member_id uuid
  event_id uuid
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table event_participants {
  id uuid pk
  member_id uuid
  event_id uuid
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table event_guest {
  id uuid pk
  guest_id uuid
  event_id uuid
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table event_call {
  id uuid pk
  event_id uuid
  initial_date timestamp
  final_date timestamp
  theme varchar
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table supplier {
  id uuid pk
  church_id uuid
  name varchar
  cpf_cnpj varchar
  status boolean
  cep varchar
  street varchar
  number varchar
  district varchar
  state varchar
  uf varchar
  country varchar
  phone_one varchar
  phone_two varchar
  phone_three varchar
  email varchar
  contact_name varchar
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table cost_center {
  id uuid pk
  code varchar
  name varchar
  description text
  type varchar
  status boolean
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table entry {
  id uuid pk
  church_id uuid
  member_id uuid
  cost_center_id uuid
  name varchar
  description text
  value varchar
  situation varchar
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table exit {
  id uuid pk
  church_id uuid
  supplier_id uuid
  cost_center_id uuid
  name varchar
  description text
  value varchar
  situation varchar
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}

table closure {
  id uuid pk
  month varchar
  date timestamp
  user_id uuid
  entry varchar
  exit varchar
  opening_balance varchar
  closing_balance varchar
  total varchar
  created_at timestamp
  update_at timestamp
  deleted_at timestamp
}


Ref: "user"."id" < "profile"."user_id"
Ref: "user"."id" < "member"."user_id"
Ref: "profile"."user_id" < "profile_permissions"."profile_id"
Ref: "permission"."profile_id" < "profile_permissions"."permission_id"
Ref: "company"."id" < "member"."church_id"
Ref: "member_origin"."id" < "member"."member_origin_id"
Ref: "member"."id" < "status_member"."member_id"
Ref: "ordination_church"."id" < "ordination_members_period"."ordination_church_id"
Ref: "member"."id" < "ordination_members_period"."member_id"
Ref: "nationality"."id" < "member"."nationality_id"
Ref: "event_type"."id" < "event"."event_type_id"
Ref: "company"."id" < "event"."church_id"
Ref: "guest"."id" < "event_guest"."guest_id"
Ref: "event"."id" < "event_guest"."event_id"
Ref: "company"."id" < "church"."company_id"
Ref: "church"."id" < "guest"."church_id"
Ref: "event"."id" < "event_call"."event_id"
Ref: "church"."id" < "event_type"."church_id"
Ref: "event"."id" < "event_participants"."event_id"
Ref: "member"."id" < "event_participants"."member_id"
Ref: "member"."id" < "guest"."member_id"
Ref: "member"."id" < "event_leader"."member_id"
Ref: "event"."id" < "event_leader"."event_id"
Ref: "church"."id" < "supplier"."church_id"
Ref: "cost_center"."id" < "entry"."cost_center_id"
Ref: "member"."id" < "entry"."member_id"
Ref: "church"."id" < "entry"."church_id"
Ref: "supplier"."id" < "exit"."supplier_id"
Ref: "cost_center"."id" < "exit"."cost_center_id"
Ref: "church"."id" < "exit"."church_id"
Ref: "user"."id" < "closure"."user_id"
