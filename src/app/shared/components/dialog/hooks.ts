import Dialog from './DialogComponent.vue'

import { DialogService } from './Dialog.Service'
import type { TdDialogProps } from 'tdesign-vue-next'
import { useDependency, useOverlayRef, useOverlay, type OverlayType } from 'vdi'

export type useDialogProps = OverlayType<TdDialogProps>

/** dialog的服务hook
 *  @open  调用打开弹窗
 */
export const useDialog = (_dialogType: useDialogProps) => {
    const { open: _open, ...dialog } = useOverlay(Dialog)

    const open = (dialogType?: Partial<useDialogProps>) => {
        return _open(
            dialogType
                ? {
                      ..._dialogType,
                      ...dialogType
                  }
                : _dialogType
        )
    }

    return { open, ...dialog }
}

export const useDialogRef = () => {
    const dialogRef = useOverlayRef()
    const dialogService = useDependency(DialogService)
    return {
        ...dialogRef,
        confirm: dialogService.confirm.bind(dialogService)
    }
}
