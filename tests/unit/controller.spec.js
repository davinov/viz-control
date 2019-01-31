import { should } from 'chai'
should()
import { shallowMount } from '@vue/test-utils'
import Controller from '@/components/Controller.vue'

describe('Controller.vue', () => {
  it('should display five inputs for ranges from 0 to 1', () => {
    const wrapper = shallowMount(Controller, {
      propsData: {}
    })

    const inputsWrapperArray = wrapper.findAll('input')
    inputsWrapperArray.should.have.lengthOf(5)
    inputsWrapperArray.wrappers.forEach(inputWrapper => {
      inputWrapper.attributes('type').should.eql('range')
      inputWrapper.attributes('min').should.eql('0')
      inputWrapper.attributes('max').should.eql('1')
      inputWrapper.attributes('step').should.eql('0.01')
    })
  })

  it('should update alpha and gamma on click', () => {
    const wrapper = shallowMount(Controller, {
      propsData: {}
    })

    const oldValues = {
      alpha: wrapper.vm.alpha,
      gamma: wrapper.vm.gamma
    }
  })
})
