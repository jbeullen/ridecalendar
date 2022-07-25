/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRide = /* GraphQL */ `
  mutation CreateRide(
    $input: CreateRideInput!
    $condition: ModelRideConditionInput
  ) {
    createRide(input: $input, condition: $condition) {
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
export const updateRide = /* GraphQL */ `
  mutation UpdateRide(
    $input: UpdateRideInput!
    $condition: ModelRideConditionInput
  ) {
    updateRide(input: $input, condition: $condition) {
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
export const deleteRide = /* GraphQL */ `
  mutation DeleteRide(
    $input: DeleteRideInput!
    $condition: ModelRideConditionInput
  ) {
    deleteRide(input: $input, condition: $condition) {
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
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
export const createRideMember = /* GraphQL */ `
  mutation CreateRideMember(
    $input: CreateRideMemberInput!
    $condition: ModelRideMemberConditionInput
  ) {
    createRideMember(input: $input, condition: $condition) {
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
export const updateRideMember = /* GraphQL */ `
  mutation UpdateRideMember(
    $input: UpdateRideMemberInput!
    $condition: ModelRideMemberConditionInput
  ) {
    updateRideMember(input: $input, condition: $condition) {
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
export const deleteRideMember = /* GraphQL */ `
  mutation DeleteRideMember(
    $input: DeleteRideMemberInput!
    $condition: ModelRideMemberConditionInput
  ) {
    deleteRideMember(input: $input, condition: $condition) {
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
