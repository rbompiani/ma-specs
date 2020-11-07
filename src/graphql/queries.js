/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      divisionsOn
      sectionsOn
      paragraphsOn
      content {
        items {
          id
          section {
            id
          }
          paragraph {
            id
            part {
              id
            }
          }
          orderInParagraph
          listTier
          content
          isOn
          createdAt
          updatedAt
        }
        nextToken
      }
      baseType
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
        divisionsOn
        sectionsOn
        paragraphsOn
        content {
          nextToken
        }
        baseType
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
      sections {
        items {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      baseType
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
        sections {
          nextToken
        }
        baseType
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
      division {
        id
        title
        sections {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      baseType
      parts {
        items {
          id
          title
          baseType
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
        division {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        baseType
        parts {
          nextToken
        }
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
      paragraphs {
        items {
          id
          title
          isStandard
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      baseType
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
        paragraphs {
          nextToken
        }
        baseType
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
      title
      part {
        id
        title
        paragraphs {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      isStandard
      baseType
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
        title
        part {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        isStandard
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubparagraph = /* GraphQL */ `
  query GetSubparagraph($id: ID!) {
    getSubparagraph(id: $id) {
      id
      project {
        id
        title
        divisionsOn
        sectionsOn
        paragraphsOn
        content {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      section {
        id
        title
        division {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        baseType
        parts {
          nextToken
        }
        createdAt
        updatedAt
      }
      paragraph {
        id
        title
        part {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        isStandard
        baseType
        createdAt
        updatedAt
      }
      orderInParagraph
      listTier
      content
      isOn
      createdAt
      updatedAt
    }
  }
`;
export const listSubparagraphs = /* GraphQL */ `
  query ListSubparagraphs(
    $filter: ModelSubparagraphFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubparagraphs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        project {
          id
          title
          divisionsOn
          sectionsOn
          paragraphsOn
          baseType
          createdAt
          updatedAt
        }
        section {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        paragraph {
          id
          title
          isStandard
          baseType
          createdAt
          updatedAt
        }
        orderInParagraph
        listTier
        content
        isOn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const projectsByNumber = /* GraphQL */ `
  query ProjectsByNumber(
    $baseType: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByNumber(
      baseType: $baseType
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        divisionsOn
        sectionsOn
        paragraphsOn
        content {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const divisionsByNumber = /* GraphQL */ `
  query DivisionsByNumber(
    $baseType: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelDivisionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    divisionsByNumber(
      baseType: $baseType
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        sections {
          nextToken
          items {
            id
            title
          }
        }
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const partsByNumber = /* GraphQL */ `
  query PartsByNumber(
    $baseType: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    partsByNumber(
      baseType: $baseType
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        paragraphs {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
