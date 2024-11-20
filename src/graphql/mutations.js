import { gql } from '@apollo/client';

export const ADD_TASK = gql`
  mutation AddTask($text: String!) {
    addTask(text: $text) {
      id
      text
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id) {
      id
    }
  }
`;
