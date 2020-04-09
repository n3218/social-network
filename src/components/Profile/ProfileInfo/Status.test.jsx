import React from "react";
import { create } from "react-test-renderer";
import Status from "./Status";


describe("Profile Status component", () => {

  test("#1 Status from props should be in the state", () => {
    const component = create(<Status status="Checking Status from props" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Checking Status from props");
  });

  test("#2 After creation <span> should be displayed", () => {
    const component = create(<Status status="it-kamasutra" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("#3 After creation <input> shouldn't be displayed", () => {
    const component = create(<Status status="it-kamasutra" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("#4 After creation <span> should display correct status", () => {
    const component = create(<Status status="it-kamasutra" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("it-kamasutra");
  });

  test("#5 Input should be displayd in editMode instead of span", () => {
    const component = create(<Status status="it-kamasutra" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("it-kamasutra");
  });

  test("#6 Callback should be colled", () => {
    const mockCallback = jest.fn();
    const component = create(<Status status="it-kamasutra" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });

});