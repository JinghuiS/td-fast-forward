import Drawer from './DrawerComponent.vue'

import { useDependency, useOverlayRef, useOverlay } from 'vdi'

import type { TdDrawerProps } from 'tdesign-vue-next'
import type { OverlayType } from 'vdi'
import { DrawerService } from './Drawer.Service'
export type useDrawerProps = OverlayType<TdDrawerProps>

/** dialog的服务hook
 *  @open  调用打开弹窗
 */
export const useDrawer = () => {
    const { open: _open, ...dialog } = useOverlay(Drawer)

    const open = (drawerType: useDrawerProps) => {
        return _open(drawerType)
    }

    return { open, ...dialog }
}

export const useDrawerRef = () => {
    const dialogRef = useOverlayRef()
    const drawerService = useDependency(DrawerService)
    return {
        ...dialogRef,
        confirm: drawerService.confirm.bind(drawerService)
    }
}
