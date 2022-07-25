/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRide = /* GraphQL */ `
  subscription OnCreateRide {
    onCreateRide {
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
export const onUpdateRide = /* GraphQL */ `
  subscription OnUpdateRide {
    onUpdateRide {
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
export const onDeleteRide = /* GraphQL */ `
  subscription OnDeleteRide {
    onDeleteRide {
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
export const onCreateRideMember = /* GraphQL */ `
  subscription OnCreateRideMember {
    onCreateRideMember {
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
export const onUpdateRideMember = /* GraphQL */ `
  subscription OnUpdateRideMember {
    onUpdateRideMember {
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
export const onDeleteRideMember = /* GraphQL */ `
  subscription OnDeleteRideMember {
    onDeleteRideMember {
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
