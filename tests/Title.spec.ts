import {describe, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import {TitleProps} from "../src/types/props/TitleProps";
import Title from "../src/components/texts/Title.vue";

describe('Title', () => {
    it('renders properly', () => {
        const wrapper = mount(Title, {
            props: {
                text: 'Hello Title'
            } as TitleProps,
        })

        expect(wrapper.props().text).eq('Hello Title')
        expect(wrapper.props().fontSize).eq('text-3xl')
    })

    it('renders with fontSize text-5xl', () => {
        const wrapper = mount(Title, {
            props: {
                text: 'Hello Title',
                fontSize: "text-5xl"
            } as TitleProps,
        })

        expect(wrapper.props().text).eq('Hello Title')
        expect(wrapper.props().fontSize).eq('text-5xl')
    })

    it('renders with default variant', () => {
        const wrapper = mount(Title, {
            props: {
                text: 'Hello Title'
            } as TitleProps,
        })

        expect(wrapper.props().text).eq('Hello Title')
        expect(wrapper.props().variant).eq('h3')
    })

    it('renders with h1 variant', () => {
        const wrapper = mount(Title, {
            props: {
                text: 'Hello Title',
                variant: "h1"
            } as TitleProps,
        })

        expect(wrapper.props().text).eq('Hello Title')
        expect(wrapper.props().variant).eq('h1')
    })

    it('renders with default alignment', () => {
        const wrapper = mount(Title, {
            props: {
                text: 'Hello Title'
            } as TitleProps,
        })

        expect(wrapper.props().text).eq('Hello Title')
        expect(wrapper.props().horizontalAlign).eq('start')
    })

    it('renders with start alignment', () => {
        const wrapper = mount(Title, {
            props: {
                text: 'Hello Title',
                horizontalAlign : 'start'
            } as TitleProps,
        })

        expect(wrapper.props().text).eq('Hello Title')
        expect(wrapper.props().horizontalAlign).eq('start')
    })

    it('renders with center alignment', () => {
        const wrapper = mount(Title, {
            props: {
                text: 'Hello Title',
                horizontalAlign : 'center'
            } as TitleProps,
        })

        expect(wrapper.props().text).eq('Hello Title')
        expect(wrapper.props().horizontalAlign).eq('center')
    })

    it('renders with end alignment', () => {
        const wrapper = mount(Title, {
            props: {
                text: 'Hello Title',
                horizontalAlign : 'end'
            } as TitleProps,
        })

        expect(wrapper.props().text).eq('Hello Title')
        expect(wrapper.props().horizontalAlign).eq('end')
    })
})