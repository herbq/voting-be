export namespace IKeys {
  export type PublicKey = string;
  export type PrivateKey = string;
  export type IV = string;

  export interface Keys {
    publicKey: PublicKey,
    privateKey: PrivateKey,
    iv?: IV
  }
}

export namespace IElection {
  export interface Candidate {
    id: string,
    name: string,
    description: string,
    image: string
  }

  export interface Vote {
    id: string,
    votes: string[],
    signature: string,
  }
  
  export interface Interest {
    id: string,
  }

  export interface Date {
    start: number,
    finish: number
  }
}

export namespace IDatabase {
  export interface User extends Document {
    identification: string;
    email?: string;
    password: string;
    name: {
      firstName: string;
      lastName: string;
    };
    profileImage?: string;
    phoneNumber?: string;
    keys: IKeys.Keys;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface Election extends Document {
    title: string;
    candidates: IElection.Candidate[];
    dates: IElection.Date;
    interests: IElection.Interest[],
    color: string,
    keys: IKeys.Keys;
    votes: IElection.Vote[];
    createdAt: Date;
    updatedAt: Date;
  }
}