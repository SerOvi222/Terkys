import { h } from 'vue'
import { Widget, WidgetConfig } from './index'

export class TextWidget extends Widget {
  constructor() {
    super()
    this.name = 'text'
    this.icon = 'text'
    this.label = '文本'

    this.isDrag = true
    this.isEnum = false
  }

  getTemplate(config: WidgetConfig) {
    return h(
      'div',
      {
        class: 'v-text',
        style: this.getWidgetStyle(config.style),
        onMousedown: this.preventDefault
      },
      config.props?.value
    )
  }

  getPreview(config: WidgetConfig, data: any) {
    return h(
      'div',
      {
        class: 'v-text',
        style: this.getWidgetStyle(config.style)
      },
      this.getPreviewModel(config.props?.value, data)
    )
  }

  getConfig() {
    const config: WidgetConfig = {
      type: 'text',
      lock: false,
      style: {
        width: 200,
        height: 30,
        minWidth: 100,
        minHeight: 30,
        opacity: 1,
        rotate: 0,
        overflow: 'hidden',
        fontSize: 20,
        fontFamily: 'sans-serif',
        textStyles: [],
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: 1.5,
        letterSpacing: 0,
        color: '',
        backgroundColor: '#fff',
        backgroundImage: '',
        backgroundPosition: '',
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat'
      },
      props: {
        value: '文本占位'
      },
      propConfigs: [
        {
          label: '组件内容',
          type: 'input',
          model: 'value'
        }
      ]
    }
    return config
  }
}
