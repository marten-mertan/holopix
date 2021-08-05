<template>
    <div class="game">
        <div ref="game-table"
             class="game-table">
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
        <button @click="refreshGame">
            TRY AGAIN
        </button>
        {{ printCurrentPath() }}
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
                tableHeight: 4,
                cells: [],
                currentPath: [],
                currentColorClass: '',
                paths: [],
            };
        },
        mounted() {
            const len = this.tableWidth * this.tableHeight;
            this.$refs['game-table'].style.width = ` ${this.tableWidth * 80}px`;
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
                this.currentPat = [];
                this.currentColorClass = '';
                this.paths = [];
                for (const item of this.cells) {
                    this.cells[item.id].used = false;
                    if (!item.value) {
                        this.cells[item.id].colorClass = '';
                    }
                }
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;

        &-table {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 20px;

            &-cell {
                flex: 0 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 80px;
                height: 80px;
                border: 3px solid #c8c8c8;
                background-color: #fefefe;
                user-select: none;
                border-radius: 20px;

                svg {
                    width: 40px;
                    height: 40px;
                }

                &.marine {
                    background-color: #c23b64;
                    border-color: #492727;
                }

                &.aqua {
                    background-color: #c67cf1;
                    border-color: #97e6fa;
                }
            }
        }
    }
</style>
