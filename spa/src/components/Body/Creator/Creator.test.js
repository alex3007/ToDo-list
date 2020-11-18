import React from "react";
import TestRenderer from "react-test-renderer";
import Creator from "./Creator";


describe("Testing of Creator component", () => {

   test("after creation 'form' should be rendered", () => {
        const app = TestRenderer.create(<Creator/>);
        const root = app.root;
        let form = root.findByType("form");
        expect(form).not.toBeNull();
    });

    test("after creation 'input' should be rendered", () => {
        const app = TestRenderer.create(<Creator/>);
        const root = app.root;
        let input = root.findByType("input");
        expect(input).not.toBeNull();
    });

});