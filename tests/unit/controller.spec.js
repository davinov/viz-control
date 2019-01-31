import { should } from 'chai'
should()
import { shallowMount } from '@vue/test-utils'
import Controller from '@/components/Controller.vue'

describe('Controller.vue', () => {
  it('should update alpha and gamma on click', () => {
    const wrapper = shallowMount(Controller, {
      propsData: {}
    })

    wrapper.trigger('click')

    wrapper.vm.alpha.should.equal(0);
    wrapper.vm.gamma.should.equal(1);
  })

  it('should update alpha and gamma on click on center', () => {
    const wrapper = shallowMount(Controller, {
      propsData: {}
    })

    wrapper.trigger('click', {
      clientX: wrapper.element.offsetWidth / 2,
      clientY: wrapper.element.offsetHeight / 2
    })

    wrapper.vm.alpha.should.equal(0.5);
    wrapper.vm.gamma.should.equal(0.5);
  })
})
