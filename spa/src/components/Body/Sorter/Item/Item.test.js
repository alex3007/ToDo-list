import React from "react";
import TestRenderer from "react-test-renderer";
import Item from "./Item";
import {render, fireEvent, cleanup} from '@testing-library/react';


describe("Testing of Item component", () => {

    let newItem = <Item
        id="1"
        task="todo..."
        filtrLabel="todo"
    />

    test("after creation 'form' should be rendered", () => {
        const app = TestRenderer.create(<Item/>);
        const root = app.root;
        let form = root.findByType("form");
        expect(form).not.toBeNull();
    });

    test("after creation 'textarea' should be rendered", () => {
        const app = TestRenderer.create(<Item/>);
        const root = app.root;
        let textarea = root.findByType("textarea");
        expect(textarea).not.toBeNull();
    });

    test("component should have props 'task'", () => {
        const app = TestRenderer.create(<Item/>);
        const root = app.root;
        let props = root.findAllByProps("task");
        expect(props).not.toBeNull();
    });

    test("component should have props 'task'", () => {
        const app = TestRenderer.create(<Item/>);
        const root = app.root;
        let props = root.findAllByProps("task");
        expect(props).not.toBeNull();
    });



});