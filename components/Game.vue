<template>
    <div class="game">
        <div ref="game-table"
             class="game-table"
             :class="[refreshing ? 'in-refreshing' : null]">
            <div v-for="cell in cells" 
                 :key="cell.id"
                 class="game-table-cell"
                 :class="[cell.used ? cell.colorClass : null]"
                 @mousedown="mouseDown(cell)"
                 @mouseup="mouseUp(cell)"
                 @mouseenter="mouseEnter(cell)">
                <svg v-if="cell.icon" 
                     :class="cell.icon">
                    <use :xlink:href="'icons/all.svg#' + cell.icon" />
                </svg>
            </div>
        </div>
        <div class="game-controls">
            <button class="game-btn"
                    @click="refreshGame">
                NEW
            </button>
            <span class="game-score">Раунд: 0</span>
            <button class="game-btn"
                    @click="refreshGame">
                TRY AGAIN
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Game',
        components: {
        },
        data() {
            return {
                tableWidth: 6,
                tableHeight: 6,
                cellWidth: 80,
                cells: [],
                currentPath: [],
                currentColorClass: '',
                paths: [],
                refreshing: false,
            };
        },
        mounted() {
            const len = this.tableWidth * this.tableHeight;
            this.$refs['game-table'].style.width = ` ${this.tableWidth * this.cellWidth}px`;
            for (let i=0; i<len; i++) {
                const item = {
                    id: i,
                    value: 0,
                    colorClass: '',
                    icon: '',
                    used: false
                };
                this.cells.push(item);
            }
            this.cells[2].value = 1;
            this.cells[2].colorClass = 'aqua';
            this.cells[2].icon = 'icon-aqua';
            this.cells[8].value = 1;
            this.cells[8].colorClass = 'aqua';
            this.cells[8].icon = 'icon-aqua';
            this.cells[15].value = 2;
            this.cells[15].colorClass = 'marine';
            this.cells[15].icon = 'icon-marine';
            this.cells[9].value = 2;
            this.cells[9].colorClass = 'marine';
            this.cells[9].icon = 'icon-marine';
        },
        methods: {
            mouseDown(cell) {
                if (cell.value && !this.cells[cell.id].used) {
                    this.currentPath = [];
                    this.currentColorClass = cell.colorClass;
                    this.cells[cell.id].used = true;
                    this.currentPath.push(cell);
                }
            },
            mouseEnter(cell) {
                const len = this.currentPath.length;
                const previousCell = this.currentPath[len - 1];
                const stepBackCell = this.currentPath[len - 2];
                const firstCellInPath = this.currentPath[0];

                // когда возвращаемся обратно на предыдущую ячейку
                if (stepBackCell?.id === cell.id) {
                    this.cells[previousCell?.id].used = false;
                    if (!this.cells[previousCell?.id].value) {
                        this.cells[previousCell?.id].colorClass = '';
                    }
                    this.currentPath.pop();
                    return;
                }

                // проверка ячейки на валидность и запись ячейки в текущий путь
                if (previousCell?.id !== cell.id && (Math.abs(previousCell?.id - cell.id) === 1 || Math.abs(previousCell?.id - cell.id) === this.tableWidth) && !cell.used && (cell.value === 0 || cell.value === firstCellInPath.value)) {
                    this.cells[previousCell.id].used = true;
                    if (!this.cells[cell.id].value) {
                        this.cells[cell.id].colorClass = this.currentColorClass;
                    }
                    this.cells[cell.id].used = true;
                    this.currentPath.push(cell);
                }
            },
            mouseUp(cell) {
                const len = this.currentPath.length;
                const firstCellInPath = this.currentPath[0];
                const lastCell = this.currentPath[len - 1];
                if (cell.value === firstCellInPath?.value && cell.id !== firstCellInPath?.id && cell.id === lastCell.id) {
                    this.paths.push(this.currentPath);
                    for (const item of this.currentPath) {
                        this.cells[item.id].used = true;
                    }
                } else {
                    for (const item of this.currentPath) {
                        this.cells[item.id].used = false;
                    }
                }
                this.currentPath = [];
                if (this.allSellsUsed(this.cells)) {
                    console.log('victory!!');
                }
            },
            refreshGame() {
                this.refreshing = true;
                setTimeout(() => {
                    this.currentPat = [];
                    this.currentColorClass = '';
                    this.paths = [];
                    for (const item of this.cells) {
                        this.cells[item.id].used = false;
                        if (!item.value) {
                            this.cells[item.id].colorClass = '';
                        }
                    }
                    this.refreshing = false;
                }, 150);
            },

            // техническая
            printCurrentPath() {
                return [...this.currentPath.map(cell => cell.id)];
            },

            // техническая
            allSellsUsed(cells) {
                for (const item of cells) {
                    if (!item.used) {
                        return false;
                    }
                }
                return true;
            },
        }

    };
</script>

<style lang="scss">
    .game {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px;
        background-color: #1fa3de;
        border-radius: 3px;
        border: 18px solid white;
        box-shadow: 0 0 6px rgba(0, 0, 0, .12), 0 1px 6px rgba(0, 0, 0, .24);
        z-index: 2;

        &-table {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 10px;
            box-sizing: content-box;

            &.in-refreshing {
                .game-table-cell {
                    transform: rotate3d(1, 1, 0, 90deg);
                }
            }

            &-cell {
                position: relative;
                flex: 0 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 80px;
                height: 80px;
                border: 1px solid rgba(255, 255, 255, .55);
                user-select: none;
                border-radius: 12px;
                overflow: hidden;
                cursor: pointer;
                z-index: 1;
                transition: transform .15s ease;

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(255, 255, 255, .15);
                    backdrop-filter: blur(50px);
                    z-index: 1;
                }

                svg {
                    position: relative;
                    width: 50px;
                    height: 50px;
                    z-index: 2;
                }

                &.marine {
                    background-color: #c23b64;
                    border-color: #492727;

                    &:before {
                        background-color: rgba(255, 255, 255, 0);
                        backdrop-filter: blur(0);
                    }
                }

                &.aqua {
                    background-color: #c67cf1;
                    border-color: #97e6fa;

                    &:before {
                        background-color: rgba(255, 255, 255, 0);
                        backdrop-filter: blur(0);
                    }
                }
            }
        }

        &-controls {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
        }

        &-score {
            color: white;
            letter-spacing: 2px;
            font-size: 14px;
            font-weight: 300;
            margin-right: 20px;
        }

        &-btn {
            position: relative;
            padding: 20px 24px;
            background-color: rgba(255, 255, 255, .15);
            backdrop-filter: blur(50px);
            cursor: pointer;
            overflow: hidden;
            letter-spacing: 2px;
            font-size: 12px;
            font-weight: 300;
            color: white;
            min-width: 150px;
            transition: background-color .2s ease-in-out;

            &:not(:last-child) {
                margin-right: 20px;
            }

            &:hover {
                background-color: rgba(255, 255, 255, .25);

                &:before {
                    left: 0;
                }
            }

            &:before {
                display: block;
                content: '';
                position: absolute;
                bottom: 0;
                left: -100%;
                width: 100%;
                height: 1px;
                background-color: white;
                transition: left .2s ease-in-out;
            }
        }
    }
</style>
