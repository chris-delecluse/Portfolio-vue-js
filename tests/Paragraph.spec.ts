import {describe, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import Paragraph from "../src/components/texts/Paragraph.vue";
import {ParagraphProps} from "../src/types/props/ParagraphProps";

describe('Paragraph', () => {
    it('renders properly', () => {
        const wrapper = mount(Paragraph, {
            props: {
                text: 'Hello Vitest'
            } as ParagraphProps,
        })

        expect(wrapper.props().text).eq('Hello Vitest')
        expect(wrapper.props().fontSize).eq('text-base')
    })

    it('renders with fontSize text-xl', () => {
        const wrapper = mount(Paragraph, {
            props: {
                text: 'Hello Vitest',
                fontSize: "text-xl"
            } as ParagraphProps,
        })

        expect(wrapper.props().text).eq('Hello Vitest')
        expect(wrapper.props().fontSize).eq('text-xl')
    })

    it('renders with default alignment', () => {
        const wrapper = mount(Paragraph, {
            props: {
                text: 'Hello Vitest'
            } as ParagraphProps,
        })

        expect(wrapper.props().text).eq('Hello Vitest')
        expect(wrapper.props().horizontalAlign).eq('start')
    })

    it('renders with start alignment', () => {
        const wrapper = mount(Paragraph, {
            props: {
                text: 'Hello Vitest',
                horizontalAlign: 'start',
            } as ParagraphProps,
        })

        expect(wrapper.props().text).eq('Hello Vitest')
        expect(wrapper.props().horizontalAlign).eq('start')
    })

    it('renders with center alignment', () => {
        const wrapper = mount(Paragraph, {
            props: {
                text: 'Hello Vitest',
                horizontalAlign: 'center',
            } as ParagraphProps,
        })

        expect(wrapper.props().text).eq('Hello Vitest')
        expect(wrapper.props().horizontalAlign).eq('center')
    })

    it('renders with end alignment', () => {
        const wrapper = mount(Paragraph, {
            props: {
                text: 'Hello Vitest',
                horizontalAlign: 'end',
            } as ParagraphProps,
        })

        expect(wrapper.props().text).eq('Hello Vitest')
        expect(wrapper.props().horizontalAlign).eq('end')
    })
})