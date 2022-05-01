import { h, resolveComponent } from 'vue'
import { IMAGE_OBJECT_FIT_TYPES } from '@/constant/dict'
import { Widget, WidgetConfig, LooseOptions } from './index'

export class ImageWidget extends Widget {
  constructor() {
    super()
    this.name = 'image'
    this.icon = 'image'
    this.label = '图片'

    this.isDrag = true
    this.isEnum = false
  }

  getImageAttrs(attrs?: LooseOptions) {
    return {
      objectFit: attrs?.objectFit
    }
  }

  getTemplate(config: WidgetConfig) {
    return h(
      resolveComponent('ElImage'),
      {
        class: 'v-image',
        style: this.getWidgetStyle(config.style),
        src: config.props?.src,
        fit: config.attrs?.objectFit,
        onMousedown: this.preventDefault
      },
      config.props?.label
    )
  }

  getPreview(config: WidgetConfig, data: any) {
    return h(
      resolveComponent('ElImage'),
      {
        class: 'v-image',
        style: this.getWidgetStyle(config.style),
        src: this.getPreviewModel(config.props?.src, data),
        fit: config.attrs?.objectFit
      },
      config.props?.label
    )
  }

  getConfig() {
    const config: WidgetConfig = {
      type: 'image',
      lock: false,
      style: {
        width: 300,
        height: 200,
        minWidth: 40,
        minHeight: 40,
        opacity: 1,
        rotate: 0,
        overflow: 'hidden',
        justifyContent: '',
        color: '',
        backgroundColor: '#fff'
      },
      attrs: {
        objectFit: 'fill'
      },
      props: {
        src: '/visual-maker/thumb/image-example.png'
      },
      attrConfigs: [
        {
          label: '裁切模式',
          type: 'select',
          model: 'objectFit',
          items: IMAGE_OBJECT_FIT_TYPES
        }
      ],
      propConfigs: [
        {
          label: '图片链接',
          type: 'input',
          model: 'src'
        }
      ]
    }
    return config
  }
}
