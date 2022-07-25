/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRide = /* GraphQL */ `
  query GetRide($id: ID!) {
    getRide(id: $id) {
      id
      date
      description
      distance
      elevation_gain
      points
      location
      gpx
      type
      attendance {
        items {
          id
          rideID
          memberID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      website
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRides = /* GraphQL */ `
  query ListRides(
    $filter: ModelRideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        description
        distance
        elevation_gain
        points
        location
        gpx
        type
        attendance {
          nextToken
          startedAt
        }
        website
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRides = /* GraphQL */ `
  query SyncRides(
    $filter: ModelRideFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRides(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        description
        distance
        elevation_gain
        points
        location
        gpx
        type
        attendance {
          nextToken
          startedAt
        }
        website
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      first_name
      last_name
      rides {
        items {
          id
          rideID
          memberID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        rides {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMembers = /* GraphQL */ `
  query SyncMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        first_name
        last_name
        rides {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRideMember = /* GraphQL */ `
  query GetRideMember($id: ID!) {
    getRideMember(id: $id) {
      id
      rideID
      memberID
      ride {
        id
        date
        description
        distance
        elevation_gain
        points
        location
        gpx
        type
        attendance {
          nextToken
          startedAt
        }
        website
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      member {
        id
        first_name
        last_name
        rides {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRideMembers = /* GraphQL */ `
  query ListRideMembers(
    $filter: ModelRideMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRideMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rideID
        memberID
        ride {
          id
          date
          description
          distance
          elevation_gain
          points
          location
          gpx
          type
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        member {
          id
          first_name
          last_name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRideMembers = /* GraphQL */ `
  query SyncRideMembers(
    $filter: ModelRideMemberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRideMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        rideID
        memberID
        ride {
          id
          date
          description
          distance
          elevation_gain
          points
          location
          gpx
          type
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        member {
          id
          first_name
          last_name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
