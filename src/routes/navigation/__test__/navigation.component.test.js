import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.util";

import Navigation from "../navigation.component";
// import * as reactRedux from "react-redux";

import { useDispatch } from "react-redux";
import { signOutStart } from "../../../store/user/user.action";

// Mock useDispatch from react-redux
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn()
  }));


describe("Navigation tests", () => {
  test("It should render Sign In and not Sign Out if there is no currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();

    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeNull();
  });

  test("It should render Sign Out and not Sign In if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    const signInLinkElement = screen.queryByText(/sign in/i);
    //   expect(signInLinkElement).not.toBeInTheDocument();
    expect(signInLinkElement).toBeNull();
  });

  test("it should render a cart dropdown if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const checkoutButtonElement = screen.getByText(/go to checkout/i);
    expect(checkoutButtonElement).toBeInTheDocument();
  });

  test("it should not render a cart dropdown if isCartOpen is false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    const dropdownTextElement = screen.queryByText(/your cart is empty/i);
    expect(dropdownTextElement).toBeNull();
  });

  test("it should dispatch signOutStart action when clicking on the Sign Out link", async () => {
    const mockDispatch = jest.fn();
    
    useDispatch.mockReturnValue(mockDispatch)
    // jest.spyOn(reactRedux, 'useDispatch').mockReturnValue(mockDispatch);


    renderWithProviders(<Navigation />, {
        preloadedState: {
          user: {
            currentUser: {},
          },
        },
      });
  
      const signOutLinkElement = screen.getByText(/sign out/i);
      expect(signOutLinkElement).toBeInTheDocument();
  
      fireEvent.click(signOutLinkElement);
  
      expect(mockDispatch).toHaveBeenCalled();
      expect(mockDispatch).toHaveBeenCalledWith(signOutStart());

      mockDispatch.mockClear();

  });
});
