import { gql } from "apollo-boost";

export const WEDDING_QUERY = gql`
  query Weddings($size: Int!) {
    wedding(_size: $size) {
      data {
        _id
        name
        message
        attend
        created
      }
    }
  }
`;
export const TODO_QUERY = gql`
  query Wedding($id: Int!) {
    findTodoByID(id: $id) {
      _id
      name
      message
      attend
      created
    }
  }
`;
