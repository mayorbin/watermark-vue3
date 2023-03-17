import waterMark from './waterMark'

export default function installDirective(app) {
  app.directive(waterMark.name, waterMark.directives)
}
