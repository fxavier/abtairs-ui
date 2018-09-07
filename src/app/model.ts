export class District {
  id: number;
  name: string;
  active: boolean;
}

export class OperationalSite {
  id: number;
  name: string;
  target: number;
  district = new District();
  active: boolean;
}

export class Locality {
  id: number;
  name: string;
  operationalSite = new OperationalSite();
  active: boolean;
}

export class Village {
  id: number;
  name: string;
  locality = new Locality();
  active: boolean;
}

export class SprayOperator {
  id: number;
  sprayOperatorCode: number;
  name: string;
  district = new District();
  active: boolean;
}

export class TeamLeader {
  id: number;
  teamLeaderCode: number;
  name: string;
  district = new District();
  active: boolean;
}
