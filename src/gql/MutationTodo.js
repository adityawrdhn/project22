import { gql } from "apollo-boost";

export const ADD_WEDDING_MUTATION = gql`
  mutation CreateWedding($data: WeddingInput!) {
    createWedding(data: $data) {
      _id
      name
      message
      attend
      created
    }
  }
`;
export const UPDATE_WEDDING_MUTATION = gql`
  mutation UpdateWedding($id: ID!, $data: WeddingInput!) {
    updateWedding(id: $id, data: $data) {
      _id
      name
      message
      attend
      created
    }
  }
`;
export const DELETE_WEDDING_MUTATION = gql`
  mutation DeleteWedding($id: ID!) {
    deleteWedding(id: $id) {
      _id
      name
      message
      attend
      created
    }
  }
`;
