'use client'
import React, { createContext, useReducer, useContext, ReactNode, Reducer } from 'react';

// Expanded: Icon + Description visible
// Collapsed: Only Icon visible
// Hidden: Neither Icon nor Description visible
type BarState = "expanded"|"collapsed"|"hidden"

type BarAction<T extends string = string > = {
    type: T 
}


type NavbarState<T extends string = BarState> = {
    navbarState: T
    sidebarState: T
    isCorlorBar: boolean
    next: () => NavbarState
}

const Expanded: NavbarState = {
    navbarState: "expanded",
    sidebarState: "expanded",
    isCorlorBar: true,
    next: () => ({ ...Collapsed}) 
}

const FullScreen: NavbarState = {
    navbarState: "hidden",
    sidebarState: "hidden",
    isCorlorBar: false,
    next: () => ({...Expanded})
} 

const Collapsed: NavbarState = {
    navbarState: "collapsed",
    sidebarState: "collapsed",
    isCorlorBar: false,
    next: () => ({ ...FullScreen}) 
}

const reducer: Reducer<NavbarState, BarAction> = (state: NavbarState, action: BarAction): NavbarState=> {
    switch (action.type) {
        case 'NEXT': {
          return state.next()
        }
    }
    throw Error('Unknown action: ' + action.type);
}

const NavbarContext = createContext<{ state: NavbarState; dispatch: React.Dispatch<BarAction> } | undefined>(undefined);


export const NavbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, Expanded);
    const value = { state, dispatch };
    return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>;
  };

  export const useNavbar = () => {
    const context = useContext(NavbarContext);
    if (context === undefined) {
      throw new Error('useNavbar must be used within a NavbarProvider');
    }
    return context;
  };