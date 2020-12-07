/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      sectionsOn      
      content {
        items {
          id
          section {
              id
              title
          }
          partsOn
          articlesOn
          paragraphs{
            items{
              id
              article
              orderInArticle
              content
              isOn
              baseType
              subparagraphs {
                items{
                  id
                  orderInParagraph
                  content
                  isOn
                  baseType
                }
              }
            }
          }
          notes
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
        sectionsOn
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
      articles {
        items {
          id
          title
          orderInPart
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
        articles {
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
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      title
      part {
        id
        title
        articles {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      orderInPart
      isStandard
      baseType
      paragraphHints {
        items {
          id
          orderInArticle
          content
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
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        orderInPart
        isStandard
        baseType
        paragraphHints {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getParagraphHint = /* GraphQL */ `
  query GetParagraphHint($id: ID!) {
    getParagraphHint(id: $id) {
      id
      article {
        id
        title
        part {
          id
          title
          baseType
          createdAt
          updatedAt
        }
        orderInPart
        isStandard
        baseType
        paragraphHints {
          nextToken
        }
        createdAt
        updatedAt
      }
      orderInArticle
      content
      createdAt
      updatedAt
    }
  }
`;
export const listParagraphHints = /* GraphQL */ `
  query ListParagraphHints(
    $filter: ModelParagraphHintFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParagraphHints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        article {
          id
          title
          orderInPart
          isStandard
          baseType
          createdAt
          updatedAt
        }
        orderInArticle
        content
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
      section {
        id
        project {
          id
          title
          sectionsOn
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
        partsOn
        articlesOn
        paragraphs {
          nextToken
        }
        notes
        createdAt
        updatedAt
      }
      article
      orderInArticle
      content
      isOn
      subparagraphs {
        items {
          id
          orderInParagraph
          content
          isOn
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
export const listParagraphs = /* GraphQL */ `
  query ListParagraphs(
    $filter: ModelParagraphFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParagraphs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        section {
          id
          partsOn
          articlesOn
          notes
          createdAt
          updatedAt
        }
        article
        orderInArticle
        content
        isOn
        subparagraphs {
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
export const getSubParagraph = /* GraphQL */ `
  query GetSubParagraph($id: ID!) {
    getSubParagraph(id: $id) {
      id
      paragraph {
        id
        section {
          id
          partsOn
          articlesOn
          notes
          createdAt
          updatedAt
        }
        article
        orderInArticle
        content
        isOn
        subparagraphs {
          nextToken
        }
        baseType
        createdAt
        updatedAt
      }
      orderInParagraph
      content
      isOn
      baseType
      createdAt
      updatedAt
    }
  }
`;
export const listSubParagraphs = /* GraphQL */ `
  query ListSubParagraphs(
    $filter: ModelSubParagraphFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubParagraphs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        paragraph {
          id
          article
          orderInArticle
          content
          isOn
          baseType
          createdAt
          updatedAt
        }
        orderInParagraph
        content
        isOn
        baseType
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSectionContent = /* GraphQL */ `
  query GetSectionContent($id: ID!) {
    getSectionContent(id: $id) {
      id
      project {
        id
        title
        sectionsOn
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
      partsOn
      articlesOn
      paragraphs {
        items {
          id
          article
          orderInArticle
          content
          isOn
          baseType
          createdAt
          updatedAt
        }
        nextToken
      }
      notes
      createdAt
      updatedAt
    }
  }
`;
export const listSectionContents = /* GraphQL */ `
  query ListSectionContents(
    $filter: ModelSectionContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSectionContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        project {
          id
          title
          sectionsOn
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
        partsOn
        articlesOn
        paragraphs {
          nextToken
        }
        notes
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
        sectionsOn
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
          items{
            id
            title
            baseType
            }
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
        articles {
          items {
            id
            title
            orderInPart
            baseType
            paragraphHints {
              items{
                id
                orderInArticle
                content
              }
            }
          }
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
