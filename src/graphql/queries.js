/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      divisionsOn {
        items {
          id
          title
          createdAt
          updatedAt
        }
        nextToken
      }
      sectionsOn {
        items {
          id
          title
          createdAt
          updatedAt
        }
        nextToken
      }
      paragraphsOn {
        items {
          id
          title
          isStandard
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        divisionsOn {
          nextToken
        }
        sectionsOn {
          nextToken
        }
        paragraphsOn {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDivision = /* GraphQL */ `
  query GetDivision($id: ID!) {
    getDivision(id: $id) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const listDivisions = /* GraphQL */ `
  query ListDivisions(
    $filter: ModelDivisionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDivisions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPart = /* GraphQL */ `
  query GetPart($id: ID!) {
    getPart(id: $id) {
      id
      title
      createdAt
      updatedAt
    }
  }
`;
export const listParts = /* GraphQL */ `
  query ListParts(
    $filter: ModelPartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getParagraph = /* GraphQL */ `
  query GetParagraph($id: ID!) {
    getParagraph(id: $id) {
      id
      part {
        id
        title
        createdAt
        updatedAt
      }
      title
      isStandard
      createdAt
      updatedAt
    }
  }
`;
export const listParagraphs = /* GraphQL */ `
  query ListParagraphs(
    $filter: ModelParagraphFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParagraphs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        part {
          id
          title
          createdAt
          updatedAt
        }
        title
        isStandard
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
