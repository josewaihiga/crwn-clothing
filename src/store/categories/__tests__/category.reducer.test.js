import { categoriesReducer, CATEGORIES_INITIAL_STATE } from "../category.reducer";
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFail } from "../category.action";

describe("Category reducer tests", () => {
  test("fetchCategoriesStart", () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true,
    };

    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())).toEqual(expectedState);
  });

  test("fetchCategoriesSuccess", () => {
    const mockData = [
      {
        title: "mens",
        imageUrl: "test",
        items: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      },
      {
        title: "womens",
        imageUrl: "test2",
        items: [
          { id: 3, name: "Product 3" },
          { id: 4, name: "Product 4" },
        ],
      }
    ];

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      categories: mockData
    };

    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesSuccess(mockData))).toEqual(expectedState);
  });


  test("fetchCategoriesFail", () => {
    
    const mockError = new Error('Error fetching categories');

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: false,
      error: mockError
    };

    expect(categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesFail(mockError))).toEqual(expectedState);
  });
});
