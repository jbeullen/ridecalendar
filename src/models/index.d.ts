import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RideMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MemberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RideMemberMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Ride {
  readonly id: string;
  readonly date?: string | null;
  readonly description?: string | null;
  readonly distance?: number | null;
  readonly elevation_gain?: number | null;
  readonly points?: number | null;
  readonly location?: string | null;
  readonly gpx?: string | null;
  readonly type?: string | null;
  readonly attendance?: (RideMember | null)[] | null;
  readonly website?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ride, RideMetaData>);
  static copyOf(source: Ride, mutator: (draft: MutableModel<Ride, RideMetaData>) => MutableModel<Ride, RideMetaData> | void): Ride;
}

export declare class Member {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly rides?: (RideMember | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Member, MemberMetaData>);
  static copyOf(source: Member, mutator: (draft: MutableModel<Member, MemberMetaData>) => MutableModel<Member, MemberMetaData> | void): Member;
}

export declare class RideMember {
  readonly id: string;
  readonly ride: Ride;
  readonly member: Member;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<RideMember, RideMemberMetaData>);
  static copyOf(source: RideMember, mutator: (draft: MutableModel<RideMember, RideMemberMetaData>) => MutableModel<RideMember, RideMemberMetaData> | void): RideMember;
}