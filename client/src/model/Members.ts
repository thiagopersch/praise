import {
  CivilStatus,
  ColorRace,
  Formations,
  MemberSituations,
} from './Auxiliaries';
import { Church } from './Church';
import { Families } from './Families';
import { MemberOrigin } from './MemberOrigins';
import { Ordination } from './Ordination';
import { Person } from './Person';

export type Members = {
  id: string;
  person_id: string;
  person: Person;
  church: Church;
  church_id: string;
  rg: string;
  issuing_body: string;
  civil_status: CivilStatus;
  civil_status_id: string;
  nationality: string;
  naturalness: string;
  color_race: ColorRace;
  color_race_id: string;
  formation: Formations;
  formation_id: string;
  formation_course: string;
  profission: string;
  def_physical: boolean;
  def_visual: boolean;
  def_hearing: boolean;
  def_intellectual: boolean;
  def_mental: boolean;
  def_multiple: boolean;
  def_other: boolean;
  def_other_description: string;
  baptism_date: string;
  baptism_locale: string;
  baptism_official: string;
  baptism_holy_spirit: boolean;
  baptism_holy_spirit_date: string;
  member_origin: MemberOrigin;
  member_origin_id: string;
  receipt_date: string;
  updated_at: string;
  family: Families[];
  ordination: Ordination[];
  status_member: StatusMember[];
};

export type StatusMember = {
  id: string;
  member: Members;
  member_id: string;
  member_situation: MemberSituations;
  member_situation_id: string;
  initial_period: string;
  final_period: string;
  updated_at: string;
};

export type History = {
  id: string;
  member?: Members;
  member_id: string;
  table_name: string;
  before_situation: string;
  after_situation: string;
  change_date: string;
};
